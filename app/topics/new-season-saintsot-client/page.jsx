import NewSeasonSaintsotClientKeywordPage, { generateMetadata } from './new-season-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotClientKeywordPage />;
}
