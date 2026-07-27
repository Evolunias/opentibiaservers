import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-website');
}

export default function RealMapInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-website" />;
}
