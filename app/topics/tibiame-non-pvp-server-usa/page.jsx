import TibiameNonPvpServerUsaKeywordPage, { generateMetadata } from './tibiame-non-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameNonPvpServerUsaKeywordPage />;
}
