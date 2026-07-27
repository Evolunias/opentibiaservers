import NoResetOtmadnessOpenTibiaKeywordPage, { generateMetadata } from './no-reset-otmadness-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessOpenTibiaKeywordPage />;
}
