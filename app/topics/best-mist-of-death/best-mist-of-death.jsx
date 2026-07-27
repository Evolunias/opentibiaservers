import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death');
}

export default function BestMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death" />;
}
