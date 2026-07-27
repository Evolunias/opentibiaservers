import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-server-germany');
}

export default function InfernalOtRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-server-germany" />;
}
