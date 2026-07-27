import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-old-school-server');
}

export default function Coxaot100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-old-school-server" />;
}
