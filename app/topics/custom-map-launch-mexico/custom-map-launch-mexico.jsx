import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-mexico');
}

export default function CustomMapLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-mexico" />;
}
