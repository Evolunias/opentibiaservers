import Tibiara13PvpServerKeywordPage, { generateMetadata } from './tibiara-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara13PvpServerKeywordPage />;
}
