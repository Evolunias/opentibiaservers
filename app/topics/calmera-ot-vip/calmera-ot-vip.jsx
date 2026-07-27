import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-vip');
}

export default function CalmeraOtVipKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-vip" />;
}
