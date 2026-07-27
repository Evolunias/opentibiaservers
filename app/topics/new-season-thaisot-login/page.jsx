import NewSeasonThaisotLoginKeywordPage, { generateMetadata } from './new-season-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotLoginKeywordPage />;
}
