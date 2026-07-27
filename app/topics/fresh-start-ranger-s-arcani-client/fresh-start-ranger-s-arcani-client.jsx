import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-client');
}

export default function FreshStartRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-client" />;
}
