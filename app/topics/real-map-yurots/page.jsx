import RealMapYurotsKeywordPage, { generateMetadata } from './real-map-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsKeywordPage />;
}
