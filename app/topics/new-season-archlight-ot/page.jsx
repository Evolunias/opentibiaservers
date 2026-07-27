import NewSeasonArchlightOtKeywordPage, { generateMetadata } from './new-season-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightOtKeywordPage />;
}
