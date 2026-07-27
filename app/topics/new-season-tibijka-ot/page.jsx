import NewSeasonTibijkaOtKeywordPage, { generateMetadata } from './new-season-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaOtKeywordPage />;
}
