import Alastera15PvpeServerKeywordPage, { generateMetadata } from './alastera-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15PvpeServerKeywordPage />;
}
