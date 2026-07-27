import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-server');
}

export default function PopularCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-server" />;
}
