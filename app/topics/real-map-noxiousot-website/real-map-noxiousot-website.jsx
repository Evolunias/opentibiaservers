import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-noxiousot-website');
}

export default function RealMapNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-noxiousot-website" />;
}
