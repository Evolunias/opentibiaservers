import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-server-latin-america');
}

export default function InfernalOtRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-server-latin-america" />;
}
