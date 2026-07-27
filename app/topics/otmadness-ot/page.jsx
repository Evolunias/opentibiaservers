import OtmadnessOtKeywordPage, { generateMetadata } from './otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessOtKeywordPage />;
}
