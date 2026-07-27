import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-server');
}

export default function LowrateTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-server" />;
}
