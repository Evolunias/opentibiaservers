import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-ots');
}

export default function LowrateTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-ots" />;
}
