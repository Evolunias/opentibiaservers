import RealMapThorniaOtKeywordPage, { generateMetadata } from './real-map-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaOtKeywordPage />;
}
