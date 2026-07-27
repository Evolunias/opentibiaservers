import NewSeasonKasteriaOtServerKeywordPage, { generateMetadata } from './new-season-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaOtServerKeywordPage />;
}
