import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-private-server');
}

export default function NoResetBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-private-server" />;
}
