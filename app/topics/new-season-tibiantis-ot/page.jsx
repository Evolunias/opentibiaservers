import NewSeasonTibiantisOtKeywordPage, { generateMetadata } from './new-season-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiantisOtKeywordPage />;
}
