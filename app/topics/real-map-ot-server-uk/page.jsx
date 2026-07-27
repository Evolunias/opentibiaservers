import RealMapOtServerUkKeywordPage, { generateMetadata } from './real-map-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtServerUkKeywordPage />;
}
