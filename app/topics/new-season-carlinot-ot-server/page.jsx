import NewSeasonCarlinotOtServerKeywordPage, { generateMetadata } from './new-season-carlinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotOtServerKeywordPage />;
}
