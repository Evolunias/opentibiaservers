import LowrateRubinotHighscoresKeywordPage, { generateMetadata } from './lowrate-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotHighscoresKeywordPage />;
}
