import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-vip');
}

export default function ThorniaVipKeywordPage() {
  return <StaticKeywordPage slug="thornia-vip" />;
}
