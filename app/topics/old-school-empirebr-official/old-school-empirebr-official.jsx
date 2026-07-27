import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-official');
}

export default function OldSchoolEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-official" />;
}
