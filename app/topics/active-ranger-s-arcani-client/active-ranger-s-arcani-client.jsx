import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-client');
}

export default function ActiveRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-client" />;
}
