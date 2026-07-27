import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-server');
}

export default function NoResetOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-server" />;
}
