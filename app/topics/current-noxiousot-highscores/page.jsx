import CurrentNoxiousotHighscoresKeywordPage, { generateMetadata } from './current-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotHighscoresKeywordPage />;
}
