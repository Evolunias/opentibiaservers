import EternalOdysseyHighscoresKeywordPage, { generateMetadata } from './eternal-odyssey-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyHighscoresKeywordPage />;
}
