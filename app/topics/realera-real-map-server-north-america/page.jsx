import RealeraRealMapServerNorthAmericaKeywordPage, { generateMetadata } from './realera-real-map-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraRealMapServerNorthAmericaKeywordPage />;
}
