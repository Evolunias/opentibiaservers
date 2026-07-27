import NewSeasonInfernalOtKeywordPage, { generateMetadata } from './new-season-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonInfernalOtKeywordPage />;
}
