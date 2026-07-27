import NoResetRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './no-reset-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRuthlessChaosHighscoresKeywordPage />;
}
