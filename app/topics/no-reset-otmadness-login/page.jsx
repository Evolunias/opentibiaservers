import NoResetOtmadnessLoginKeywordPage, { generateMetadata } from './no-reset-otmadness-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessLoginKeywordPage />;
}
