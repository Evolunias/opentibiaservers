import ActiveNoxiousotHighscoresKeywordPage, { generateMetadata } from './active-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotHighscoresKeywordPage />;
}
