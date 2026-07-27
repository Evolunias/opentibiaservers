import Tibiara12PvpServerKeywordPage, { generateMetadata } from './tibiara-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara12PvpServerKeywordPage />;
}
