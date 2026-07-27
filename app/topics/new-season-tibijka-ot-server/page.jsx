import NewSeasonTibijkaOtServerKeywordPage, { generateMetadata } from './new-season-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaOtServerKeywordPage />;
}
