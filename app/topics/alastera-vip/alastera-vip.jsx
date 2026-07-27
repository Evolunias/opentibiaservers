import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-vip');
}

export default function AlasteraVipKeywordPage() {
  return <StaticKeywordPage slug="alastera-vip" />;
}
