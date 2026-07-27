import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-rules');
}

export default function OldSchoolSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-rules" />;
}
