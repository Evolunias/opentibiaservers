import CustomShadowcoresHighscoresKeywordPage, { generateMetadata } from './custom-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresHighscoresKeywordPage />;
}
