import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-website');
}

export default function RealMapAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-website" />;
}
