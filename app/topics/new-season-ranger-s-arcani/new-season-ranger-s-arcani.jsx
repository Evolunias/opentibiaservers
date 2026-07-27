import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani');
}

export default function NewSeasonRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani" />;
}
