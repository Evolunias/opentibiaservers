import NewSeasonSaintsotOtKeywordPage, { generateMetadata } from './new-season-saintsot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotOtKeywordPage />;
}
