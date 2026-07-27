import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-server');
}

export default function NoResetCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-server" />;
}
