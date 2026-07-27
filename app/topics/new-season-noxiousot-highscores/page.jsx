import NewSeasonNoxiousotHighscoresKeywordPage, { generateMetadata } from './new-season-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNoxiousotHighscoresKeywordPage />;
}
