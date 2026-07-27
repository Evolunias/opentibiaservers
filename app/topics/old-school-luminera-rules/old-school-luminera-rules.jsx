import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-rules');
}

export default function OldSchoolLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-rules" />;
}
