import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-server-sweden');
}

export default function InfernalOtRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-server-sweden" />;
}
