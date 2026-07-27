import Alastera74PvpServerKeywordPage, { generateMetadata } from './alastera-7-4-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera74PvpServerKeywordPage />;
}
