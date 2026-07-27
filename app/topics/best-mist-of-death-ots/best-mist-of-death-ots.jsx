import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-ots');
}

export default function BestMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-ots" />;
}
