import NewSeasonTibijkaOtsKeywordPage, { generateMetadata } from './new-season-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaOtsKeywordPage />;
}
