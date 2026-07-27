import KasteriaMexicoServerKeywordPage, { generateMetadata } from './kasteria-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaMexicoServerKeywordPage />;
}
