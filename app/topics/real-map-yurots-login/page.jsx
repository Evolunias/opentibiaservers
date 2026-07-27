import RealMapYurotsLoginKeywordPage, { generateMetadata } from './real-map-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsLoginKeywordPage />;
}
