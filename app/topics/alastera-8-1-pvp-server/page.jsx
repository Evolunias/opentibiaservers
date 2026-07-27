import Alastera81PvpServerKeywordPage, { generateMetadata } from './alastera-8-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera81PvpServerKeywordPage />;
}
