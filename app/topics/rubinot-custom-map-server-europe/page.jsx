import RubinotCustomMapServerEuropeKeywordPage, { generateMetadata } from './rubinot-custom-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotCustomMapServerEuropeKeywordPage />;
}
