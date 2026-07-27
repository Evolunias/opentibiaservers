import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-ots');
}

export default function PopularMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-ots" />;
}
