import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-old-school-server');
}

export default function Coxaot12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-old-school-server" />;
}
