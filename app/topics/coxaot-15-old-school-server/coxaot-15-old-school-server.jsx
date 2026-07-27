import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-old-school-server');
}

export default function Coxaot15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-old-school-server" />;
}
