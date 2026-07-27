import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-login');
}

export default function LowrateTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-login" />;
}
