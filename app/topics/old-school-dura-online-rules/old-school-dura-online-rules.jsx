import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-rules');
}

export default function OldSchoolDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-rules" />;
}
