import NoResetOtmadnessKeywordPage, { generateMetadata } from './no-reset-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessKeywordPage />;
}
