import NewSeasonEvoleraServerKeywordPage, { generateMetadata } from './new-season-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraServerKeywordPage />;
}
