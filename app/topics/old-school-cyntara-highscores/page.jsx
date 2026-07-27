import OldSchoolCyntaraHighscoresKeywordPage, { generateMetadata } from './old-school-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraHighscoresKeywordPage />;
}
