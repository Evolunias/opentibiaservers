import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-ot-server');
}

export default function NewSeasonRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-ot-server" />;
}
