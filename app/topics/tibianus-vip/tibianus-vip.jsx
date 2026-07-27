import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-vip');
}

export default function TibianusVipKeywordPage() {
  return <StaticKeywordPage slug="tibianus-vip" />;
}
