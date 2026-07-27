import NewSeasonSerenityKeywordPage, { generateMetadata } from './new-season-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityKeywordPage />;
}
