import ArcaniarlEuropeServerKeywordPage, { generateMetadata } from './arcaniarl-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlEuropeServerKeywordPage />;
}
