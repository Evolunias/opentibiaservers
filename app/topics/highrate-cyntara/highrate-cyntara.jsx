import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara');
}

export default function HighrateCyntaraKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara" />;
}
