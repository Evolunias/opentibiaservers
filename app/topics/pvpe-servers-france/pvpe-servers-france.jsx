import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-france');
}

export default function PvpeServersFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-france" />;
}
