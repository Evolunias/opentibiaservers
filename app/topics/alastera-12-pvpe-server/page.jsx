import Alastera12PvpeServerKeywordPage, { generateMetadata } from './alastera-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12PvpeServerKeywordPage />;
}
