import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara');
}

export default function FreshStartCyntaraKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara" />;
}
