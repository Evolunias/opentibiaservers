import NewSeasonSerenityPrivateServerKeywordPage, { generateMetadata } from './new-season-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityPrivateServerKeywordPage />;
}
