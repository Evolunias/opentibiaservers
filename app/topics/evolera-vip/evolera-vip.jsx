import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-vip');
}

export default function EvoleraVipKeywordPage() {
  return <StaticKeywordPage slug="evolera-vip" />;
}
