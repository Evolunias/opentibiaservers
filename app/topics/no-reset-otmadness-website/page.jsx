import NoResetOtmadnessWebsiteKeywordPage, { generateMetadata } from './no-reset-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessWebsiteKeywordPage />;
}
