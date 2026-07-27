import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-private-server');
}

export default function TopCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-private-server" />;
}
