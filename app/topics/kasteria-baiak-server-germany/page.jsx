import KasteriaBaiakServerGermanyKeywordPage, { generateMetadata } from './kasteria-baiak-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaBaiakServerGermanyKeywordPage />;
}
