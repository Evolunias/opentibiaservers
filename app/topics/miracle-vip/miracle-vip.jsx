import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-vip');
}

export default function MiracleVipKeywordPage() {
  return <StaticKeywordPage slug="miracle-vip" />;
}
