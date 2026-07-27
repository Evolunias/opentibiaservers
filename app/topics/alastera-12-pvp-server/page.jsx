import Alastera12PvpServerKeywordPage, { generateMetadata } from './alastera-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12PvpServerKeywordPage />;
}
