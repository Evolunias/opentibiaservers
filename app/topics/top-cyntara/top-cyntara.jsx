import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara');
}

export default function TopCyntaraKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara" />;
}
