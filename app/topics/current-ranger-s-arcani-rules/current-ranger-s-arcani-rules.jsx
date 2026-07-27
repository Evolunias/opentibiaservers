import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-rules');
}

export default function CurrentRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-rules" />;
}
