import NewSeasonTibianusServerKeywordPage, { generateMetadata } from './new-season-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusServerKeywordPage />;
}
