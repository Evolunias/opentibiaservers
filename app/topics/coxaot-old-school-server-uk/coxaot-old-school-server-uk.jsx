import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-old-school-server-uk');
}

export default function CoxaotOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-old-school-server-uk" />;
}
