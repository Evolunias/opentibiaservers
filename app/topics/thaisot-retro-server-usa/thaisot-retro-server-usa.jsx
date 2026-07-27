import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-usa');
}

export default function ThaisotRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-usa" />;
}
