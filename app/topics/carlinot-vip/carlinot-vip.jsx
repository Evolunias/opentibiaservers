import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-vip');
}

export default function CarlinotVipKeywordPage() {
  return <StaticKeywordPage slug="carlinot-vip" />;
}
