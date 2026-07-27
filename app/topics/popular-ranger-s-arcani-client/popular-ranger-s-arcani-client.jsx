import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-client');
}

export default function PopularRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-client" />;
}
