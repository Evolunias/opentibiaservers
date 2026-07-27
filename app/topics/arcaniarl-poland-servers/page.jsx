import ArcaniarlPolandServersKeywordPage, { generateMetadata } from './arcaniarl-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlPolandServersKeywordPage />;
}
