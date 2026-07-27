import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-ot-server');
}

export default function CurrentTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-ot-server" />;
}
