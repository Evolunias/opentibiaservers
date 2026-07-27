import RealMapGuideUkKeywordPage, { generateMetadata } from './real-map-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGuideUkKeywordPage />;
}
