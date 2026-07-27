import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-private-server');
}

export default function NoResetAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-private-server" />;
}
