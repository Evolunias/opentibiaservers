import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-private-server');
}

export default function NoResetTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-private-server" />;
}
