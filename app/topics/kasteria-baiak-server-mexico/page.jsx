import KasteriaBaiakServerMexicoKeywordPage, { generateMetadata } from './kasteria-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaBaiakServerMexicoKeywordPage />;
}
