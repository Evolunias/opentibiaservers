import OldSchoolRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosHighscoresKeywordPage />;
}
