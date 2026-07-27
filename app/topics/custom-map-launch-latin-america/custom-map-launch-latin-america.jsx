import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-latin-america');
}

export default function CustomMapLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-latin-america" />;
}
