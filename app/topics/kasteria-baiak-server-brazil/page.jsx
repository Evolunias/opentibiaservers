import KasteriaBaiakServerBrazilKeywordPage, { generateMetadata } from './kasteria-baiak-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaBaiakServerBrazilKeywordPage />;
}
