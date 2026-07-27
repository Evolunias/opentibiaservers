import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-vip');
}

export default function VenoreotVipKeywordPage() {
  return <StaticKeywordPage slug="venoreot-vip" />;
}
