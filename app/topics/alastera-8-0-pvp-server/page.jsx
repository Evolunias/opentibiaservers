import Alastera80PvpServerKeywordPage, { generateMetadata } from './alastera-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera80PvpServerKeywordPage />;
}
