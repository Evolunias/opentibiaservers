import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-ots');
}

export default function HighrateCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-ots" />;
}
