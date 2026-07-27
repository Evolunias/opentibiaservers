import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-vip');
}

export default function EvoluniaVipKeywordPage() {
  return <StaticKeywordPage slug="evolunia-vip" />;
}
