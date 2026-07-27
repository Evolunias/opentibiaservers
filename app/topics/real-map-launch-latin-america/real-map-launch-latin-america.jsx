import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-latin-america');
}

export default function RealMapLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-latin-america" />;
}
