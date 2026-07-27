import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-north-america');
}

export default function BaiakOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-north-america" />;
}
