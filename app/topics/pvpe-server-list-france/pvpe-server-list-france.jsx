import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-france');
}

export default function PvpeServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-france" />;
}
