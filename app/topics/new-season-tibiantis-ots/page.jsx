import NewSeasonTibiantisOtsKeywordPage, { generateMetadata } from './new-season-tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiantisOtsKeywordPage />;
}
