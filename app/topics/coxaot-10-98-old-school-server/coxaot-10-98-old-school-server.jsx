import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-old-school-server');
}

export default function Coxaot1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-old-school-server" />;
}
