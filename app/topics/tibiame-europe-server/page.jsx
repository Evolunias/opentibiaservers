import TibiameEuropeServerKeywordPage, { generateMetadata } from './tibiame-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameEuropeServerKeywordPage />;
}
