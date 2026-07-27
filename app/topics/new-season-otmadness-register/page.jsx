import NewSeasonOtmadnessRegisterKeywordPage, { generateMetadata } from './new-season-otmadness-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessRegisterKeywordPage />;
}
