import RealMapOtServerEuropeKeywordPage, { generateMetadata } from './real-map-ot-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtServerEuropeKeywordPage />;
}
