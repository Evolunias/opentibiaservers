import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-uk');
}

export default function BlazeraPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-uk" />;
}
