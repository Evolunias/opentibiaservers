import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-rules');
}

export default function FreshStartRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-rules" />;
}
