import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-argentina');
}

export default function InfernalOtCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-argentina" />;
}
