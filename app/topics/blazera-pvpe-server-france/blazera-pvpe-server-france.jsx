import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-france');
}

export default function BlazeraPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-france" />;
}
