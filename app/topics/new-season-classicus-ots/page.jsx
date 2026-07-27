import NewSeasonClassicusOtsKeywordPage, { generateMetadata } from './new-season-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusOtsKeywordPage />;
}
