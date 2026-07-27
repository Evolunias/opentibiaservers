import NewSeasonCarlinotOtKeywordPage, { generateMetadata } from './new-season-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotOtKeywordPage />;
}
