import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-client');
}

export default function HighrateCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-client" />;
}
