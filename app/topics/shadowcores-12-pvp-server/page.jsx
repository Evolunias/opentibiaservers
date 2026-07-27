import Shadowcores12PvpServerKeywordPage, { generateMetadata } from './shadowcores-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12PvpServerKeywordPage />;
}
