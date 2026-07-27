import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-rules');
}

export default function OldSchoolOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-rules" />;
}
