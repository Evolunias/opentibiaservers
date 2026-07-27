import OfficialNostaltherHighscoresKeywordPage, { generateMetadata } from './official-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherHighscoresKeywordPage />;
}
