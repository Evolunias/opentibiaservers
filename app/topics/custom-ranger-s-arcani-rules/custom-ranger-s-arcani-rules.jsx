import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-rules');
}

export default function CustomRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-rules" />;
}
