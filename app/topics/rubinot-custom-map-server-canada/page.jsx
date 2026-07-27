import RubinotCustomMapServerCanadaKeywordPage, { generateMetadata } from './rubinot-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotCustomMapServerCanadaKeywordPage />;
}
