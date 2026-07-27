import NewSeasonSaintsotServerKeywordPage, { generateMetadata } from './new-season-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotServerKeywordPage />;
}
