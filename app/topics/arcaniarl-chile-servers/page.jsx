import ArcaniarlChileServersKeywordPage, { generateMetadata } from './arcaniarl-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlChileServersKeywordPage />;
}
