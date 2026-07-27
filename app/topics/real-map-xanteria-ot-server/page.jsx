import RealMapXanteriaOtServerKeywordPage, { generateMetadata } from './real-map-xanteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaOtServerKeywordPage />;
}
