import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-server');
}

export default function TopCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-server" />;
}
