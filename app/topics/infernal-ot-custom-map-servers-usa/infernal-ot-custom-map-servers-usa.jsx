import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-usa');
}

export default function InfernalOtCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-usa" />;
}
