import ArcaniarlUsaServersKeywordPage, { generateMetadata } from './arcaniarl-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlUsaServersKeywordPage />;
}
