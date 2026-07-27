import SabrehavenPvpeServerChileKeywordPage, { generateMetadata } from './sabrehaven-pvpe-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenPvpeServerChileKeywordPage />;
}
