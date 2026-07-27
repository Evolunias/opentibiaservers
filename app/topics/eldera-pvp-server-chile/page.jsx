import ElderaPvpServerChileKeywordPage, { generateMetadata } from './eldera-pvp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPvpServerChileKeywordPage />;
}
