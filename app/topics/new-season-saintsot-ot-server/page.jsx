import NewSeasonSaintsotOtServerKeywordPage, { generateMetadata } from './new-season-saintsot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotOtServerKeywordPage />;
}
