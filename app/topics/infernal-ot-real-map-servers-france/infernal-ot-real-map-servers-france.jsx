import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-servers-france');
}

export default function InfernalOtRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-servers-france" />;
}
