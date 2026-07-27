import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-vip');
}

export default function OxygenotVipKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-vip" />;
}
