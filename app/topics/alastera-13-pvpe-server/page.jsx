import Alastera13PvpeServerKeywordPage, { generateMetadata } from './alastera-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13PvpeServerKeywordPage />;
}
