import ElderaRealMapServerEuropeKeywordPage, { generateMetadata } from './eldera-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaRealMapServerEuropeKeywordPage />;
}
