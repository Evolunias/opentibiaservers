import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-guide');
}

export default function OldSchoolEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-guide" />;
}
