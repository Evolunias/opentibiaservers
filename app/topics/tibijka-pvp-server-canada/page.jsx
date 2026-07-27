import TibijkaPvpServerCanadaKeywordPage, { generateMetadata } from './tibijka-pvp-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpServerCanadaKeywordPage />;
}
