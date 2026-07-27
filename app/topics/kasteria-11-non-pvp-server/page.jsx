import Kasteria11NonPvpServerKeywordPage, { generateMetadata } from './kasteria-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11NonPvpServerKeywordPage />;
}
