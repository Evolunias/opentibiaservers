import NewSeasonSaintsotLoginKeywordPage, { generateMetadata } from './new-season-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotLoginKeywordPage />;
}
