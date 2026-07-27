import RealMapCalmeraOtKeywordPage, { generateMetadata } from './real-map-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCalmeraOtKeywordPage />;
}
