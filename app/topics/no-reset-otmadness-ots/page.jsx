import NoResetOtmadnessOtsKeywordPage, { generateMetadata } from './no-reset-otmadness-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessOtsKeywordPage />;
}
