import TibijkaNonPvpServerUkKeywordPage, { generateMetadata } from './tibijka-non-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaNonPvpServerUkKeywordPage />;
}
