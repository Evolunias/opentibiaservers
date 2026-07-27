import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-canada');
}

export default function ThaisotRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-canada" />;
}
