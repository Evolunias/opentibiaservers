import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-old-school-server');
}

export default function Coxaot96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-old-school-server" />;
}
