import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-france');
}

export default function PvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-france" />;
}
