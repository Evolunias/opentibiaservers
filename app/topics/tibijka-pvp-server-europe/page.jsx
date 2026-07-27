import TibijkaPvpServerEuropeKeywordPage, { generateMetadata } from './tibijka-pvp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpServerEuropeKeywordPage />;
}
