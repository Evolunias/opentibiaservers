import KasteriaPvpServerUsaKeywordPage, { generateMetadata } from './kasteria-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpServerUsaKeywordPage />;
}
