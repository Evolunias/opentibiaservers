import ArcaniarlMexicoServerKeywordPage, { generateMetadata } from './arcaniarl-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlMexicoServerKeywordPage />;
}
