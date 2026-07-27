import Alastera71PvpServerKeywordPage, { generateMetadata } from './alastera-7-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera71PvpServerKeywordPage />;
}
