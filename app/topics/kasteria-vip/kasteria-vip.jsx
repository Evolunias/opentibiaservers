import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-vip');
}

export default function KasteriaVipKeywordPage() {
  return <StaticKeywordPage slug="kasteria-vip" />;
}
