import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-vip');
}

export default function ShadowcoresVipKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-vip" />;
}
