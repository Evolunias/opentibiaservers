import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-france');
}

export default function PvpeClientFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-france" />;
}
