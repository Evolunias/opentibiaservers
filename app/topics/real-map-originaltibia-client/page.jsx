import RealMapOriginaltibiaClientKeywordPage, { generateMetadata } from './real-map-originaltibia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOriginaltibiaClientKeywordPage />;
}
