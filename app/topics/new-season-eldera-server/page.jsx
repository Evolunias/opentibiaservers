import NewSeasonElderaServerKeywordPage, { generateMetadata } from './new-season-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaServerKeywordPage />;
}
