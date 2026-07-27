import RealMapYurotsOtServerKeywordPage, { generateMetadata } from './real-map-yurots-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsOtServerKeywordPage />;
}
