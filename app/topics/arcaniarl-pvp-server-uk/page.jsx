import ArcaniarlPvpServerUkKeywordPage, { generateMetadata } from './arcaniarl-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlPvpServerUkKeywordPage />;
}
