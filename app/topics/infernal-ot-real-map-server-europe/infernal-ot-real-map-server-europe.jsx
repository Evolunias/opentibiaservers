import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-server-europe');
}

export default function InfernalOtRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-server-europe" />;
}
