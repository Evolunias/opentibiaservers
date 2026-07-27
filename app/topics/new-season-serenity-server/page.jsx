import NewSeasonSerenityServerKeywordPage, { generateMetadata } from './new-season-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityServerKeywordPage />;
}
