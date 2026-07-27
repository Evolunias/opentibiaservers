import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-ot');
}

export default function BestMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-ot" />;
}
