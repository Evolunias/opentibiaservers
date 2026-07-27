import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-website');
}

export default function RealMapEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-website" />;
}
