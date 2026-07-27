import ArcaniarlPvpServerEuropeKeywordPage, { generateMetadata } from './arcaniarl-pvp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlPvpServerEuropeKeywordPage />;
}
