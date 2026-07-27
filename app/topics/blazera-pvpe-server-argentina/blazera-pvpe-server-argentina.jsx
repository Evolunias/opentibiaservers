import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-argentina');
}

export default function BlazeraPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-argentina" />;
}
