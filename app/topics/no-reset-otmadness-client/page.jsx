import NoResetOtmadnessClientKeywordPage, { generateMetadata } from './no-reset-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessClientKeywordPage />;
}
