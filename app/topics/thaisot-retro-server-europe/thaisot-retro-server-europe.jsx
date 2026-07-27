import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-europe');
}

export default function ThaisotRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-europe" />;
}
