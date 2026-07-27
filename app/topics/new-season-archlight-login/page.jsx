import NewSeasonArchlightLoginKeywordPage, { generateMetadata } from './new-season-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightLoginKeywordPage />;
}
