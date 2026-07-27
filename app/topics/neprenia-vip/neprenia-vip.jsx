import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-vip');
}

export default function NepreniaVipKeywordPage() {
  return <StaticKeywordPage slug="neprenia-vip" />;
}
