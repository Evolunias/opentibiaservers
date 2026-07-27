import CustomXanteriaHighscoresKeywordPage, { generateMetadata } from './custom-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaHighscoresKeywordPage />;
}
