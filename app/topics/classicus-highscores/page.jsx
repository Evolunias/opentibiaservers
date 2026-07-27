import ClassicusHighscoresKeywordPage, { generateMetadata } from './classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusHighscoresKeywordPage />;
}
