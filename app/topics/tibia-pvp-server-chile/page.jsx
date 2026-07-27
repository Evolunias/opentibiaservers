import TibiaPvpServerChileKeywordPage, { generateMetadata } from './tibia-pvp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPvpServerChileKeywordPage />;
}
