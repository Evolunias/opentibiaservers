import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-vip');
}

export default function OriginaltibiaVipKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-vip" />;
}
