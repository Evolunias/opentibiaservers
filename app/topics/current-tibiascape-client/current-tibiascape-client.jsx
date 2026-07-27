import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-client');
}

export default function CurrentTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-client" />;
}
