import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-old-school-server-usa');
}

export default function CoxaotOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-old-school-server-usa" />;
}
