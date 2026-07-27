import NewSeasonEternalOdysseyServerKeywordPage, { generateMetadata } from './new-season-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEternalOdysseyServerKeywordPage />;
}
