import NewSeasonTibiaoriginsServerKeywordPage, { generateMetadata } from './new-season-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaoriginsServerKeywordPage />;
}
