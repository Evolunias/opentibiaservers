import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-rules');
}

export default function OldSchoolArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-rules" />;
}
