import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-client');
}

export default function NewSeasonRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-client" />;
}
