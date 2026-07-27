import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-vip');
}

export default function ClassicusVipKeywordPage() {
  return <StaticKeywordPage slug="classicus-vip" />;
}
