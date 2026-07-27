import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-france');
}

export default function PvpeStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-france" />;
}
