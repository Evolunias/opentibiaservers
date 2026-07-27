import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-client');
}

export default function OldSchoolEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-client" />;
}
