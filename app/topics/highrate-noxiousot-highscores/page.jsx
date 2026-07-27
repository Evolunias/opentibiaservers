import HighrateNoxiousotHighscoresKeywordPage, { generateMetadata } from './highrate-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNoxiousotHighscoresKeywordPage />;
}
