import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-ot-server');
}

export default function HighrateCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-ot-server" />;
}
