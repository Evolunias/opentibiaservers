import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-server');
}

export default function OldSchoolEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-server" />;
}
