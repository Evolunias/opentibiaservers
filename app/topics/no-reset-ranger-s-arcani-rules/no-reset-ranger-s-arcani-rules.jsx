import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-rules');
}

export default function NoResetRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-rules" />;
}
