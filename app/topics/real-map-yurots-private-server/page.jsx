import RealMapYurotsPrivateServerKeywordPage, { generateMetadata } from './real-map-yurots-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsPrivateServerKeywordPage />;
}
