import LowrateUnlineHighscoresKeywordPage, { generateMetadata } from './lowrate-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineHighscoresKeywordPage />;
}
