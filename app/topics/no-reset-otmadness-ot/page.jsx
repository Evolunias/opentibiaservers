import NoResetOtmadnessOtKeywordPage, { generateMetadata } from './no-reset-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessOtKeywordPage />;
}
