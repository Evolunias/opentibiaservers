import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-vip');
}

export default function ElderaVipKeywordPage() {
  return <StaticKeywordPage slug="eldera-vip" />;
}
