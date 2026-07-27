import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-72-old-school-server');
}

export default function Coxaot772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-72-old-school-server" />;
}
