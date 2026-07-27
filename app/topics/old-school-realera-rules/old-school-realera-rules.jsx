import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-rules');
}

export default function OldSchoolRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-rules" />;
}
