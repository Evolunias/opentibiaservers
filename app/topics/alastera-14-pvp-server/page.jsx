import Alastera14PvpServerKeywordPage, { generateMetadata } from './alastera-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14PvpServerKeywordPage />;
}
