import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-rules');
}

export default function OldSchoolImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-rules" />;
}
