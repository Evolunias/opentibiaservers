import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-vip');
}

export default function RubinotVipKeywordPage() {
  return <StaticKeywordPage slug="rubinot-vip" />;
}
