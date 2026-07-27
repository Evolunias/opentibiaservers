import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-vip');
}

export default function RealestaVipKeywordPage() {
  return <StaticKeywordPage slug="realesta-vip" />;
}
