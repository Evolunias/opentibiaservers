import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-private-server');
}

export default function PopularCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-private-server" />;
}
