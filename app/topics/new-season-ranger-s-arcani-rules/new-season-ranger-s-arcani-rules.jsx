import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-rules');
}

export default function NewSeasonRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-rules" />;
}
