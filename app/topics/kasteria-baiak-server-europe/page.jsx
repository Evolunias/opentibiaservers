import KasteriaBaiakServerEuropeKeywordPage, { generateMetadata } from './kasteria-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaBaiakServerEuropeKeywordPage />;
}
