import RealMapGuideUsaKeywordPage, { generateMetadata } from './real-map-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGuideUsaKeywordPage />;
}
