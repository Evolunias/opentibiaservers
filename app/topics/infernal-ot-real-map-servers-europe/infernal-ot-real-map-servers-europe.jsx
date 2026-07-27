import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-servers-europe');
}

export default function InfernalOtRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-servers-europe" />;
}
