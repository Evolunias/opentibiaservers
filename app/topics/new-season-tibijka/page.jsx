import NewSeasonTibijkaKeywordPage, { generateMetadata } from './new-season-tibijka';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaKeywordPage />;
}
