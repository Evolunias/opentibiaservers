import MidhemRealMapServersEuropeKeywordPage, { generateMetadata } from './midhem-real-map-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRealMapServersEuropeKeywordPage />;
}
