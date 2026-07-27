import NewSeasonAlasteraOtsKeywordPage, { generateMetadata } from './new-season-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraOtsKeywordPage />;
}
