import TibijkaPvpServerUkKeywordPage, { generateMetadata } from './tibijka-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpServerUkKeywordPage />;
}
