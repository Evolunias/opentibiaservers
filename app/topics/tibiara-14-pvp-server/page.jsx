import Tibiara14PvpServerKeywordPage, { generateMetadata } from './tibiara-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara14PvpServerKeywordPage />;
}
