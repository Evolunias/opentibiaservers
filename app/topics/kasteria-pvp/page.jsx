import KasteriaPvpKeywordPage, { generateMetadata } from './kasteria-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpKeywordPage />;
}
