import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-old-school-server');
}

export default function Coxaot84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-old-school-server" />;
}
