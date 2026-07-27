import CurrentOtmadnessGuideKeywordPage, { generateMetadata } from './current-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessGuideKeywordPage />;
}
