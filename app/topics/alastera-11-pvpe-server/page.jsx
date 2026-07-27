import Alastera11PvpeServerKeywordPage, { generateMetadata } from './alastera-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11PvpeServerKeywordPage />;
}
