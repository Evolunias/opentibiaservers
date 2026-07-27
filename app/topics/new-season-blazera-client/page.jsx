import NewSeasonBlazeraClientKeywordPage, { generateMetadata } from './new-season-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraClientKeywordPage />;
}
