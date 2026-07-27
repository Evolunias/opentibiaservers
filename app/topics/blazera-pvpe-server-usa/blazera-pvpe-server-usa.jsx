import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-usa');
}

export default function BlazeraPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-usa" />;
}
