import RealMapXanteriaServerKeywordPage, { generateMetadata } from './real-map-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaServerKeywordPage />;
}
