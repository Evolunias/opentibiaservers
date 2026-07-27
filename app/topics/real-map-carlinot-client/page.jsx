import RealMapCarlinotClientKeywordPage, { generateMetadata } from './real-map-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotClientKeywordPage />;
}
