import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-rules');
}

export default function NewRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-rules" />;
}
