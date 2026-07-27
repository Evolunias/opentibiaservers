import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-client');
}

export default function NewRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-client" />;
}
