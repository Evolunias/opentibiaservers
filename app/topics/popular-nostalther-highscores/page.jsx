import PopularNostaltherHighscoresKeywordPage, { generateMetadata } from './popular-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherHighscoresKeywordPage />;
}
