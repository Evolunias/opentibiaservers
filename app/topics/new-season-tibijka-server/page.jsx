import NewSeasonTibijkaServerKeywordPage, { generateMetadata } from './new-season-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaServerKeywordPage />;
}
