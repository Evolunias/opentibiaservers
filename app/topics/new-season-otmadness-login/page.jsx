import NewSeasonOtmadnessLoginKeywordPage, { generateMetadata } from './new-season-otmadness-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessLoginKeywordPage />;
}
