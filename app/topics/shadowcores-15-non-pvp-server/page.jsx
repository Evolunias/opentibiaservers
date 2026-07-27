import Shadowcores15NonPvpServerKeywordPage, { generateMetadata } from './shadowcores-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores15NonPvpServerKeywordPage />;
}
