import TopNoxiousotHighscoresKeywordPage, { generateMetadata } from './top-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNoxiousotHighscoresKeywordPage />;
}
