import RealMapStatusSouthAmericaKeywordPage, { generateMetadata } from './real-map-status-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapStatusSouthAmericaKeywordPage />;
}
