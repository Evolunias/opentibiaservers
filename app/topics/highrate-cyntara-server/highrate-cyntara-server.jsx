import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-server');
}

export default function HighrateCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-server" />;
}
