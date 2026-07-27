import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-uk');
}

export default function BaiakOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-uk" />;
}
