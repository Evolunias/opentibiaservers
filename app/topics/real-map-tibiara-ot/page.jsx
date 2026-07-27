import RealMapTibiaraOtKeywordPage, { generateMetadata } from './real-map-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraOtKeywordPage />;
}
