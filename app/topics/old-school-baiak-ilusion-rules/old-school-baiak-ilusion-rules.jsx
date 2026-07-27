import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-rules');
}

export default function OldSchoolBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-rules" />;
}
