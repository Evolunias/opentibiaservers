import KasteriaNonPvpServerUsaKeywordPage, { generateMetadata } from './kasteria-non-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaNonPvpServerUsaKeywordPage />;
}
