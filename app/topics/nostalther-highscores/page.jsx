import NostaltherHighscoresKeywordPage, { generateMetadata } from './nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherHighscoresKeywordPage />;
}
