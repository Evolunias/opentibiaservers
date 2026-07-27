import ArcaniarlEuropeServersKeywordPage, { generateMetadata } from './arcaniarl-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlEuropeServersKeywordPage />;
}
