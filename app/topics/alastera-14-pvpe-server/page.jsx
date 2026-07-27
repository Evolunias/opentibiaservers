import Alastera14PvpeServerKeywordPage, { generateMetadata } from './alastera-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14PvpeServerKeywordPage />;
}
