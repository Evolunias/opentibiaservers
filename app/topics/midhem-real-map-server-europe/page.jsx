import MidhemRealMapServerEuropeKeywordPage, { generateMetadata } from './midhem-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRealMapServerEuropeKeywordPage />;
}
