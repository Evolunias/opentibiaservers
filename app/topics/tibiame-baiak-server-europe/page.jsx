import TibiameBaiakServerEuropeKeywordPage, { generateMetadata } from './tibiame-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameBaiakServerEuropeKeywordPage />;
}
