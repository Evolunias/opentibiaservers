import Alastera13PvpServerKeywordPage, { generateMetadata } from './alastera-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13PvpServerKeywordPage />;
}
