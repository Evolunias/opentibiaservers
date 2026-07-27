import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-server');
}

export default function CurrentTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-server" />;
}
