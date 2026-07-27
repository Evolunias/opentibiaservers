import RealMapYurotsServerKeywordPage, { generateMetadata } from './real-map-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsServerKeywordPage />;
}
