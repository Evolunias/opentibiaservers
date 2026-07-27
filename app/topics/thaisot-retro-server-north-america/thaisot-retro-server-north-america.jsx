import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-north-america');
}

export default function ThaisotRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-north-america" />;
}
