import ThorniaMexicoServerKeywordPage, { generateMetadata } from './thornia-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaMexicoServerKeywordPage />;
}
