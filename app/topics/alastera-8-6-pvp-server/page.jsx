import Alastera86PvpServerKeywordPage, { generateMetadata } from './alastera-8-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera86PvpServerKeywordPage />;
}
