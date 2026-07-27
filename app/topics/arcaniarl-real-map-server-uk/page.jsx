import ArcaniarlRealMapServerUkKeywordPage, { generateMetadata } from './arcaniarl-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlRealMapServerUkKeywordPage />;
}
