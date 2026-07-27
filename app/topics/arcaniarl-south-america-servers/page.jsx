import ArcaniarlSouthAmericaServersKeywordPage, { generateMetadata } from './arcaniarl-south-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlSouthAmericaServersKeywordPage />;
}
