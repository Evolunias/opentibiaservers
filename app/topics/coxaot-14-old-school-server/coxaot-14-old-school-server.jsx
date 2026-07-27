import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-old-school-server');
}

export default function Coxaot14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-old-school-server" />;
}
