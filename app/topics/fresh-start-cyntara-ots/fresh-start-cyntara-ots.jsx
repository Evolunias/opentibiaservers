import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-ots');
}

export default function FreshStartCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-ots" />;
}
