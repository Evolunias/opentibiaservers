import RealMapThorniaOtsKeywordPage, { generateMetadata } from './real-map-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaOtsKeywordPage />;
}
