import KasteriaBaiakServerUkKeywordPage, { generateMetadata } from './kasteria-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaBaiakServerUkKeywordPage />;
}
