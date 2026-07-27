import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-vip');
}

export default function AureraGlobalVipKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-vip" />;
}
