import OldSchoolRookgaardTalesHighscoresKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesHighscoresKeywordPage />;
}
