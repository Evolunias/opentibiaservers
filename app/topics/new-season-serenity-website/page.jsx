import NewSeasonSerenityWebsiteKeywordPage, { generateMetadata } from './new-season-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityWebsiteKeywordPage />;
}
