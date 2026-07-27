import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-france');
}

export default function OxygenotPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-france" />;
}
