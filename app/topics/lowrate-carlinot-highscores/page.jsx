import LowrateCarlinotHighscoresKeywordPage, { generateMetadata } from './lowrate-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotHighscoresKeywordPage />;
}
