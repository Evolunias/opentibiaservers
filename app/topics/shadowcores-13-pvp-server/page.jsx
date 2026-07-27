import Shadowcores13PvpServerKeywordPage, { generateMetadata } from './shadowcores-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13PvpServerKeywordPage />;
}
