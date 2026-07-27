import NewSeasonSerenityClientKeywordPage, { generateMetadata } from './new-season-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityClientKeywordPage />;
}
