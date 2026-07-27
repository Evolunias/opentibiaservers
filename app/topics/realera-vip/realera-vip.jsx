import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-vip');
}

export default function RealeraVipKeywordPage() {
  return <StaticKeywordPage slug="realera-vip" />;
}
