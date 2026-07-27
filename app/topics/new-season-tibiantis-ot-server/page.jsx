import NewSeasonTibiantisOtServerKeywordPage, { generateMetadata } from './new-season-tibiantis-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiantisOtServerKeywordPage />;
}
