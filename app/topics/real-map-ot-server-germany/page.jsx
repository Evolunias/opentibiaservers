import RealMapOtServerGermanyKeywordPage, { generateMetadata } from './real-map-ot-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtServerGermanyKeywordPage />;
}
