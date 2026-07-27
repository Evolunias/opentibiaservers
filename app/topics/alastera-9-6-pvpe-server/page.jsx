import Alastera96PvpeServerKeywordPage, { generateMetadata } from './alastera-9-6-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96PvpeServerKeywordPage />;
}
