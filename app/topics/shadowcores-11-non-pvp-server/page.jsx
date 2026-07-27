import Shadowcores11NonPvpServerKeywordPage, { generateMetadata } from './shadowcores-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11NonPvpServerKeywordPage />;
}
