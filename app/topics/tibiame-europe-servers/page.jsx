import TibiameEuropeServersKeywordPage, { generateMetadata } from './tibiame-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameEuropeServersKeywordPage />;
}
