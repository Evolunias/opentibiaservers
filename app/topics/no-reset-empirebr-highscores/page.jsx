import NoResetEmpirebrHighscoresKeywordPage, { generateMetadata } from './no-reset-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEmpirebrHighscoresKeywordPage />;
}
