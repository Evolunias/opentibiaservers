import ArcaniarlPolandServerKeywordPage, { generateMetadata } from './arcaniarl-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlPolandServerKeywordPage />;
}
