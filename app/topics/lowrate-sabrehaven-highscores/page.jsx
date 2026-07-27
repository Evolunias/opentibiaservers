import LowrateSabrehavenHighscoresKeywordPage, { generateMetadata } from './lowrate-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenHighscoresKeywordPage />;
}
