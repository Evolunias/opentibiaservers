import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ranger-s-arcani-servers');
}

export default function CustomMapRangerSArcaniServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ranger-s-arcani-servers" />;
}
