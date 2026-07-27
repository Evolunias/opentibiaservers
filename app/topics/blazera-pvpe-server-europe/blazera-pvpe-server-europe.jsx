import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-europe');
}

export default function BlazeraPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-europe" />;
}
