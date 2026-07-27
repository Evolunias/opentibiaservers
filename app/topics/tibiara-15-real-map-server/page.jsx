import Tibiara15RealMapServerKeywordPage, { generateMetadata } from './tibiara-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15RealMapServerKeywordPage />;
}
