import OldSchoolCanobHighscoresKeywordPage, { generateMetadata } from './old-school-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobHighscoresKeywordPage />;
}
