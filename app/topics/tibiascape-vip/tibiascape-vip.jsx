import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-vip');
}

export default function TibiascapeVipKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-vip" />;
}
