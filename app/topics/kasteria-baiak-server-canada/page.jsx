import KasteriaBaiakServerCanadaKeywordPage, { generateMetadata } from './kasteria-baiak-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaBaiakServerCanadaKeywordPage />;
}
