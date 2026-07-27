import RealMapXanteriaPrivateServerKeywordPage, { generateMetadata } from './real-map-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaPrivateServerKeywordPage />;
}
