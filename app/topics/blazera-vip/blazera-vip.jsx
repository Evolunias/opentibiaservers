import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-vip');
}

export default function BlazeraVipKeywordPage() {
  return <StaticKeywordPage slug="blazera-vip" />;
}
