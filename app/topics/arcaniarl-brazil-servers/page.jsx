import ArcaniarlBrazilServersKeywordPage, { generateMetadata } from './arcaniarl-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlBrazilServersKeywordPage />;
}
