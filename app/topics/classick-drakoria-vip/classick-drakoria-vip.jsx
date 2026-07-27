import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-vip');
}

export default function ClassickDrakoriaVipKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-vip" />;
}
