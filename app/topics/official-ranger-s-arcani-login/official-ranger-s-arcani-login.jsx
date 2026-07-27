import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-login');
}

export default function OfficialRangerSArcaniLoginKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-login" />;
}
