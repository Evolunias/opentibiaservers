import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-rubinot-server');
}

export default function HighExpRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-rubinot-server" />;
}
