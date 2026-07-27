import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-germany');
}

export default function BaiakOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-germany" />;
}
