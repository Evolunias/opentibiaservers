import OldSchoolXanteriaHighscoresKeywordPage, { generateMetadata } from './old-school-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaHighscoresKeywordPage />;
}
