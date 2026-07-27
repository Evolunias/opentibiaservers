import NewSeasonEvoleraKeywordPage, { generateMetadata } from './new-season-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraKeywordPage />;
}
