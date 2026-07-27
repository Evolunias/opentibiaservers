import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-vip');
}

export default function RookgaardTalesVipKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-vip" />;
}
