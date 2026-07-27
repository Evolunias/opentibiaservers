import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-canada');
}

export default function BaiakOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-canada" />;
}
