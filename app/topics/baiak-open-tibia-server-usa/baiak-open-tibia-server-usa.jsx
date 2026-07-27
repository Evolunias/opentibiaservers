import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-usa');
}

export default function BaiakOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-usa" />;
}
