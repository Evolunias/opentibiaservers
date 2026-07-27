import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-ots');
}

export default function CurrentTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-ots" />;
}
