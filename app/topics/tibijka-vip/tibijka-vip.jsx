import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-vip');
}

export default function TibijkaVipKeywordPage() {
  return <StaticKeywordPage slug="tibijka-vip" />;
}
