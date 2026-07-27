import RealMapXanteriaOtsKeywordPage, { generateMetadata } from './real-map-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaOtsKeywordPage />;
}
