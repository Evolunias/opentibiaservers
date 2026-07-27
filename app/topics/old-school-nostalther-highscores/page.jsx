import OldSchoolNostaltherHighscoresKeywordPage, { generateMetadata } from './old-school-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherHighscoresKeywordPage />;
}
