import LowrateShadowcoresHighscoresKeywordPage, { generateMetadata } from './lowrate-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresHighscoresKeywordPage />;
}
