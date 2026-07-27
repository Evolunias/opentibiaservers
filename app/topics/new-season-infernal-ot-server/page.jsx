import NewSeasonInfernalOtServerKeywordPage, { generateMetadata } from './new-season-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonInfernalOtServerKeywordPage />;
}
