import KasteriaPvpeKeywordPage, { generateMetadata } from './kasteria-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpeKeywordPage />;
}
