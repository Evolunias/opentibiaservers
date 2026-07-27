import KasteriaBaiakServerNorthAmericaKeywordPage, { generateMetadata } from './kasteria-baiak-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaBaiakServerNorthAmericaKeywordPage />;
}
