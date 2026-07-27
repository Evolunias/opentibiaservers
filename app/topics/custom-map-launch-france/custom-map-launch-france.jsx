import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-france');
}

export default function CustomMapLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-france" />;
}
