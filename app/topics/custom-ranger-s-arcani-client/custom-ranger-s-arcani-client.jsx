import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-client');
}

export default function CustomRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-client" />;
}
