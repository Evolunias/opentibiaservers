import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-brazil');
}

export default function InfernalOtCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-brazil" />;
}
