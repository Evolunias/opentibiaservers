import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-private-server');
}

export default function NoResetTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-private-server" />;
}
