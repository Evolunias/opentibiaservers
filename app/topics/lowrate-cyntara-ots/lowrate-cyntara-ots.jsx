import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-ots');
}

export default function LowrateCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-ots" />;
}
