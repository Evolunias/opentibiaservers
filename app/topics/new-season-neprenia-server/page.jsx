import NewSeasonNepreniaServerKeywordPage, { generateMetadata } from './new-season-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaServerKeywordPage />;
}
