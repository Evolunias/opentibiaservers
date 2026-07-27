import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-argentina');
}

export default function InfernalOtCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-argentina" />;
}
