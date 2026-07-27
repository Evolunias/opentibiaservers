import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-private-server');
}

export default function LowrateTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-private-server" />;
}
