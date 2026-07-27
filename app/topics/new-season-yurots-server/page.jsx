import NewSeasonYurotsServerKeywordPage, { generateMetadata } from './new-season-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsServerKeywordPage />;
}
