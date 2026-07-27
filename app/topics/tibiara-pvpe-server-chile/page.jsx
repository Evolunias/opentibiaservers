import TibiaraPvpeServerChileKeywordPage, { generateMetadata } from './tibiara-pvpe-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPvpeServerChileKeywordPage />;
}
