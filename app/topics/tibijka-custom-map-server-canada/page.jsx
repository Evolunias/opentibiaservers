import TibijkaCustomMapServerCanadaKeywordPage, { generateMetadata } from './tibijka-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaCustomMapServerCanadaKeywordPage />;
}
