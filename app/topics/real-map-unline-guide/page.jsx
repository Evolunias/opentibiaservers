import RealMapUnlineGuideKeywordPage, { generateMetadata } from './real-map-unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapUnlineGuideKeywordPage />;
}
