import TitaniaHighscoresKeywordPage, { generateMetadata } from './titania-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaHighscoresKeywordPage />;
}
