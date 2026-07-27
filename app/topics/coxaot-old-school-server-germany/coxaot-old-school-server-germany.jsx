import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-old-school-server-germany');
}

export default function CoxaotOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-old-school-server-germany" />;
}
