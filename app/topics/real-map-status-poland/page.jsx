import RealMapStatusPolandKeywordPage, { generateMetadata } from './real-map-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapStatusPolandKeywordPage />;
}
