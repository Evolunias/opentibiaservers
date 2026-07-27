import OldSchoolEvoluniaHighscoresKeywordPage, { generateMetadata } from './old-school-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaHighscoresKeywordPage />;
}
