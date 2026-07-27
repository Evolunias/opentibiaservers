import NewSeasonThaisotKeywordPage, { generateMetadata } from './new-season-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotKeywordPage />;
}
