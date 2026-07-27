import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-private-server');
}

export default function OldSchoolEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-private-server" />;
}
