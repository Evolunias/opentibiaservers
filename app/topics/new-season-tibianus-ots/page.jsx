import NewSeasonTibianusOtsKeywordPage, { generateMetadata } from './new-season-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusOtsKeywordPage />;
}
