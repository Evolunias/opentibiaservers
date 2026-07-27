import RealMapThaisotOtsKeywordPage, { generateMetadata } from './real-map-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotOtsKeywordPage />;
}
