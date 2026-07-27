import RealMapGuideCanadaKeywordPage, { generateMetadata } from './real-map-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGuideCanadaKeywordPage />;
}
