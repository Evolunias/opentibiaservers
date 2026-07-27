import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-poland');
}

export default function BlazeraPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-poland" />;
}
