import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-vip');
}

export default function TibiameVipKeywordPage() {
  return <StaticKeywordPage slug="tibiame-vip" />;
}
