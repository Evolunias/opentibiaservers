import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-poland');
}

export default function ThaisotRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-poland" />;
}
