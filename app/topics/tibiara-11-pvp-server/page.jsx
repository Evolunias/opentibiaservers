import Tibiara11PvpServerKeywordPage, { generateMetadata } from './tibiara-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara11PvpServerKeywordPage />;
}
