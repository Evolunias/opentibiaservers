import CustomEmpirebrHighscoresKeywordPage, { generateMetadata } from './custom-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrHighscoresKeywordPage />;
}
