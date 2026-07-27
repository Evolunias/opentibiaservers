import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-client');
}

export default function PopularCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-client" />;
}
