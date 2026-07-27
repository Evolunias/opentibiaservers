import TibijkaNonPvpServerUsaKeywordPage, { generateMetadata } from './tibijka-non-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaNonPvpServerUsaKeywordPage />;
}
