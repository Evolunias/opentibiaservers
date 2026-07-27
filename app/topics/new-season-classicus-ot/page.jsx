import NewSeasonClassicusOtKeywordPage, { generateMetadata } from './new-season-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusOtKeywordPage />;
}
