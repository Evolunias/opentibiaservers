import NewSeasonSerenityLoginKeywordPage, { generateMetadata } from './new-season-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityLoginKeywordPage />;
}
