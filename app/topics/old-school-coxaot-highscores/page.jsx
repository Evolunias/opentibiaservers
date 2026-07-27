import OldSchoolCoxaotHighscoresKeywordPage, { generateMetadata } from './old-school-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotHighscoresKeywordPage />;
}
