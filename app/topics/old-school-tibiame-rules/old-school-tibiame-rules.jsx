import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-rules');
}

export default function OldSchoolTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-rules" />;
}
