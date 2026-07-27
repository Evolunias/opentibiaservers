import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-mexico');
}

export default function BlazeraPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-mexico" />;
}
