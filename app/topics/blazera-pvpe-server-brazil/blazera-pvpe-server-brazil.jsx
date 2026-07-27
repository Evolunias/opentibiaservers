import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-brazil');
}

export default function BlazeraPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-brazil" />;
}
