import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-uk');
}

export default function ThaisotRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-uk" />;
}
