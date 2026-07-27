import RealestaCustomMapServerEuropeKeywordPage, { generateMetadata } from './realesta-custom-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaCustomMapServerEuropeKeywordPage />;
}
