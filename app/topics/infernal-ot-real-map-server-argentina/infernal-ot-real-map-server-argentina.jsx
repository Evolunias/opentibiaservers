import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-server-argentina');
}

export default function InfernalOtRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-server-argentina" />;
}
