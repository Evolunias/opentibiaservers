import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani');
}

export default function OfficialRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani" />;
}
