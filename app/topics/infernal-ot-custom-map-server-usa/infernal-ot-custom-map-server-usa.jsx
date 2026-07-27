import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-usa');
}

export default function InfernalOtCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-usa" />;
}
