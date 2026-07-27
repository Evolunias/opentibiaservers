import NewSeasonThaisotOtKeywordPage, { generateMetadata } from './new-season-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotOtKeywordPage />;
}
