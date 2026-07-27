import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-south-america');
}

export default function BaiakOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-south-america" />;
}
