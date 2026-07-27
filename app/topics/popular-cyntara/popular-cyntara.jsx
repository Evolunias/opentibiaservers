import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara');
}

export default function PopularCyntaraKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara" />;
}
