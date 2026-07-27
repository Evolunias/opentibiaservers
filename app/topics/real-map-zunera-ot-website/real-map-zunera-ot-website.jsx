import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zunera-ot-website');
}

export default function RealMapZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-zunera-ot-website" />;
}
