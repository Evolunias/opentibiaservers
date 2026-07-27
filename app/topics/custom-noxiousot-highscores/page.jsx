import CustomNoxiousotHighscoresKeywordPage, { generateMetadata } from './custom-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotHighscoresKeywordPage />;
}
