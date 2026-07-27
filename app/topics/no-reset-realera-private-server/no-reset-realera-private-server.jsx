import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-private-server');
}

export default function NoResetRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-private-server" />;
}
