import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-latin-america');
}

export default function ThaisotRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-latin-america" />;
}
