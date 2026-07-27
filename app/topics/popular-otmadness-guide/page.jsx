import PopularOtmadnessGuideKeywordPage, { generateMetadata } from './popular-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessGuideKeywordPage />;
}
