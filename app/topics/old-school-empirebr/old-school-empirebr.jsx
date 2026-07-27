import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr');
}

export default function OldSchoolEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr" />;
}
