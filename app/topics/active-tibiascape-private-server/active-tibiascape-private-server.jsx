import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-private-server');
}

export default function ActiveTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-private-server" />;
}
