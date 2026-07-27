import NewSeasonClassickDrakoriaServerKeywordPage, { generateMetadata } from './new-season-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassickDrakoriaServerKeywordPage />;
}
