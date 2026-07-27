import LowrateNoxiousotHighscoresKeywordPage, { generateMetadata } from './lowrate-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotHighscoresKeywordPage />;
}
