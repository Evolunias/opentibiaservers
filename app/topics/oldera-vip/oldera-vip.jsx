import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-vip');
}

export default function OlderaVipKeywordPage() {
  return <StaticKeywordPage slug="oldera-vip" />;
}
