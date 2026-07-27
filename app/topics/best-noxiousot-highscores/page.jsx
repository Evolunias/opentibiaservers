import BestNoxiousotHighscoresKeywordPage, { generateMetadata } from './best-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNoxiousotHighscoresKeywordPage />;
}
