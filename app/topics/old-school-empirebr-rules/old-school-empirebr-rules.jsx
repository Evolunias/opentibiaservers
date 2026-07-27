import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-rules');
}

export default function OldSchoolEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-rules" />;
}
