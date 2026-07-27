import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-ots');
}

export default function OldSchoolEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-ots" />;
}
