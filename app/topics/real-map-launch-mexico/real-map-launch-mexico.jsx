import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-mexico');
}

export default function RealMapLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-mexico" />;
}
