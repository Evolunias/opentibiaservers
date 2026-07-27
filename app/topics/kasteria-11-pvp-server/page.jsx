import Kasteria11PvpServerKeywordPage, { generateMetadata } from './kasteria-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11PvpServerKeywordPage />;
}
