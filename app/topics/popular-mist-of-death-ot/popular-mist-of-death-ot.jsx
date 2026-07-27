import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-ot');
}

export default function PopularMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-ot" />;
}
