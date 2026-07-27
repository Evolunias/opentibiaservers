import NoResetOtmadnessServerKeywordPage, { generateMetadata } from './no-reset-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessServerKeywordPage />;
}
