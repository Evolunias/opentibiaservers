import Shadowcores15PvpServerKeywordPage, { generateMetadata } from './shadowcores-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores15PvpServerKeywordPage />;
}
