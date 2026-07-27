import CurrentOtmadnessWebsiteKeywordPage, { generateMetadata } from './current-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessWebsiteKeywordPage />;
}
