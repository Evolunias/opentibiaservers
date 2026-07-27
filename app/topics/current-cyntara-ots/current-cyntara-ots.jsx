import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-ots');
}

export default function CurrentCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-ots" />;
}
