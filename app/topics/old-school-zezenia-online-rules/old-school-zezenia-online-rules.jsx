import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-rules');
}

export default function OldSchoolZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-rules" />;
}
