import ElderaPvpeServerChileKeywordPage, { generateMetadata } from './eldera-pvpe-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPvpeServerChileKeywordPage />;
}
