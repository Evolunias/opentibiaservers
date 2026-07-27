import AlasteraRealMapServerEuropeKeywordPage, { generateMetadata } from './alastera-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServerEuropeKeywordPage />;
}
