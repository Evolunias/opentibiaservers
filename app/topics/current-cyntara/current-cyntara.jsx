import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara');
}

export default function CurrentCyntaraKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara" />;
}
