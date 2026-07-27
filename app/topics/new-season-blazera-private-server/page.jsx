import NewSeasonBlazeraPrivateServerKeywordPage, { generateMetadata } from './new-season-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraPrivateServerKeywordPage />;
}
