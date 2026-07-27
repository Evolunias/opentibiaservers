import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-vip');
}

export default function SaintsotVipKeywordPage() {
  return <StaticKeywordPage slug="saintsot-vip" />;
}
