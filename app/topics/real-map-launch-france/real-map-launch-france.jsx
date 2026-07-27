import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-france');
}

export default function RealMapLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-france" />;
}
