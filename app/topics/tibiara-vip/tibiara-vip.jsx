import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-vip');
}

export default function TibiaraVipKeywordPage() {
  return <StaticKeywordPage slug="tibiara-vip" />;
}
