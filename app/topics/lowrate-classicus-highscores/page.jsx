import LowrateClassicusHighscoresKeywordPage, { generateMetadata } from './lowrate-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusHighscoresKeywordPage />;
}
