import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-server-poland');
}

export default function InfernalOtRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-server-poland" />;
}
