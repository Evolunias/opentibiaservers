import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-rules');
}

export default function OfficialRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-rules" />;
}
