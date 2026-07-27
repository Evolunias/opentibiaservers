import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-vip');
}

export default function LumineraVipKeywordPage() {
  return <StaticKeywordPage slug="luminera-vip" />;
}
