import OtmadnessMapKeywordPage, { generateMetadata } from './otmadness-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessMapKeywordPage />;
}
