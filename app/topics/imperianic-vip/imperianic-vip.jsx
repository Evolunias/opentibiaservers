import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-vip');
}

export default function ImperianicVipKeywordPage() {
  return <StaticKeywordPage slug="imperianic-vip" />;
}
