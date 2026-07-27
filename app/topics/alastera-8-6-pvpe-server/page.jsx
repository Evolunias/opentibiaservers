import Alastera86PvpeServerKeywordPage, { generateMetadata } from './alastera-8-6-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera86PvpeServerKeywordPage />;
}
