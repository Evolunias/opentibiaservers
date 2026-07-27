import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-vip');
}

export default function NtoStarVipKeywordPage() {
  return <StaticKeywordPage slug="nto-star-vip" />;
}
