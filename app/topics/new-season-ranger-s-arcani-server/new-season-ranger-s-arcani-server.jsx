import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-server');
}

export default function NewSeasonRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-server" />;
}
