import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-old-school-server');
}

export default function Coxaot11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-old-school-server" />;
}
