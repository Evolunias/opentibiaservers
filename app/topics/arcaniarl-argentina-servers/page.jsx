import ArcaniarlArgentinaServersKeywordPage, { generateMetadata } from './arcaniarl-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlArgentinaServersKeywordPage />;
}
