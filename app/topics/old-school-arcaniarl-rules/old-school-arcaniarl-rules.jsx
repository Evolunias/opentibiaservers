import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-rules');
}

export default function OldSchoolArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-rules" />;
}
