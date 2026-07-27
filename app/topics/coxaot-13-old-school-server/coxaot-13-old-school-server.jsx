import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-old-school-server');
}

export default function Coxaot13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-old-school-server" />;
}
