import Kasteria13PvpServerKeywordPage, { generateMetadata } from './kasteria-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13PvpServerKeywordPage />;
}
