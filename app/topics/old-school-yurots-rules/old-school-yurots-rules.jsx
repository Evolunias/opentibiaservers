import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-rules');
}

export default function OldSchoolYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-rules" />;
}
