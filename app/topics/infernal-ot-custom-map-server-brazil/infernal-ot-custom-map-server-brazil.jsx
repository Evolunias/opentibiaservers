import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-brazil');
}

export default function InfernalOtCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-brazil" />;
}
