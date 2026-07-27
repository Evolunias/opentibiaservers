import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-rules');
}

export default function OldSchoolRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-rules" />;
}
