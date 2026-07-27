import NewSeasonSaintsotKeywordPage, { generateMetadata } from './new-season-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotKeywordPage />;
}
