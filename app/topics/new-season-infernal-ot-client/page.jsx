import NewSeasonInfernalOtClientKeywordPage, { generateMetadata } from './new-season-infernal-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonInfernalOtClientKeywordPage />;
}
