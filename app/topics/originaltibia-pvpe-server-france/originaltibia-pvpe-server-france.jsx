import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-france');
}

export default function OriginaltibiaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-france" />;
}
