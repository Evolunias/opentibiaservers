import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-rules');
}

export default function OldSchoolSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-rules" />;
}
