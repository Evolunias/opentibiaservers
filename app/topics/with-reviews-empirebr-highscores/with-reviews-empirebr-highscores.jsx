import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-highscores');
}

export default function WithReviewsEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-highscores" />;
}
