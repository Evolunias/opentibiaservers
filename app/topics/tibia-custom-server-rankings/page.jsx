import TibiaCustomServerRankingsKeywordPage, { generateMetadata } from './tibia-custom-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerRankingsKeywordPage />;
}
