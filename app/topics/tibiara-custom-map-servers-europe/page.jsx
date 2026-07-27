import TibiaraCustomMapServersEuropeKeywordPage, { generateMetadata } from './tibiara-custom-map-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraCustomMapServersEuropeKeywordPage />;
}
