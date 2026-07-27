import NewSeasonBlazeraServerKeywordPage, { generateMetadata } from './new-season-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraServerKeywordPage />;
}
