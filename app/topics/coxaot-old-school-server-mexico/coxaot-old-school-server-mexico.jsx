import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-old-school-server-mexico');
}

export default function CoxaotOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-old-school-server-mexico" />;
}
