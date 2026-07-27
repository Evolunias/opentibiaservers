import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-client');
}

export default function BestMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-client" />;
}
