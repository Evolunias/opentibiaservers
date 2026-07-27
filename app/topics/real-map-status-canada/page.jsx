import RealMapStatusCanadaKeywordPage, { generateMetadata } from './real-map-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapStatusCanadaKeywordPage />;
}
