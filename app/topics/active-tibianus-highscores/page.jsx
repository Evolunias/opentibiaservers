import ActiveTibianusHighscoresKeywordPage, { generateMetadata } from './active-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusHighscoresKeywordPage />;
}
