import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-vip');
}

export default function CanobVipKeywordPage() {
  return <StaticKeywordPage slug="canob-vip" />;
}
