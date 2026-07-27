import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-old-school-server');
}

export default function Coxaot80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-old-school-server" />;
}
