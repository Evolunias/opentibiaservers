import NewSeasonEvoleraOtsKeywordPage, { generateMetadata } from './new-season-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraOtsKeywordPage />;
}
