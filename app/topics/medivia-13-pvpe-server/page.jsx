import Medivia13PvpeServerKeywordPage, { generateMetadata } from './medivia-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13PvpeServerKeywordPage />;
}
