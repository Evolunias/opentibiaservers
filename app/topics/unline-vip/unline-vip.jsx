import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-vip');
}

export default function UnlineVipKeywordPage() {
  return <StaticKeywordPage slug="unline-vip" />;
}
