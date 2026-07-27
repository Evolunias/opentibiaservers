import RealMapYurotsOtsKeywordPage, { generateMetadata } from './real-map-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsOtsKeywordPage />;
}
