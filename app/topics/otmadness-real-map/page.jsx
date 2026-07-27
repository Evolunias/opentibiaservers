import OtmadnessRealMapKeywordPage, { generateMetadata } from './otmadness-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessRealMapKeywordPage />;
}
