import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-server');
}

export default function CurrentCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-server" />;
}
