import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-vip');
}

export default function ThaisotVipKeywordPage() {
  return <StaticKeywordPage slug="thaisot-vip" />;
}
