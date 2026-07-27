import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-client');
}

export default function CurrentRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-client" />;
}
