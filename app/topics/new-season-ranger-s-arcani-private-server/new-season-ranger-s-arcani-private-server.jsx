import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-private-server');
}

export default function NewSeasonRangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-private-server" />;
}
