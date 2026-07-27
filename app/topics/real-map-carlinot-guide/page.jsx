import RealMapCarlinotGuideKeywordPage, { generateMetadata } from './real-map-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotGuideKeywordPage />;
}
