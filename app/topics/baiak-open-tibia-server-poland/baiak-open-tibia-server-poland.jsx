import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-poland');
}

export default function BaiakOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-poland" />;
}
