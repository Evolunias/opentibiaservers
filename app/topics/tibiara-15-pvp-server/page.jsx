import Tibiara15PvpServerKeywordPage, { generateMetadata } from './tibiara-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15PvpServerKeywordPage />;
}
