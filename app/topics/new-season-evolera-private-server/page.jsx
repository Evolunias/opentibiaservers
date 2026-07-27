import NewSeasonEvoleraPrivateServerKeywordPage, { generateMetadata } from './new-season-evolera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraPrivateServerKeywordPage />;
}
