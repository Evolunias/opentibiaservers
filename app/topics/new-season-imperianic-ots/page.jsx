import NewSeasonImperianicOtsKeywordPage, { generateMetadata } from './new-season-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicOtsKeywordPage />;
}
