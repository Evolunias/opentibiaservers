import OldSchoolEmpirebrHighscoresKeywordPage, { generateMetadata } from './old-school-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrHighscoresKeywordPage />;
}
