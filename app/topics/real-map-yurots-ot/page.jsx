import RealMapYurotsOtKeywordPage, { generateMetadata } from './real-map-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsOtKeywordPage />;
}
