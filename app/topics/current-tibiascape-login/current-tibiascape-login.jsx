import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-login');
}

export default function CurrentTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-login" />;
}
