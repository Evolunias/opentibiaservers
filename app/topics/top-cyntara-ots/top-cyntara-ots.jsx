import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-ots');
}

export default function TopCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-ots" />;
}
