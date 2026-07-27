import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-old-school-server-poland');
}

export default function CoxaotOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-old-school-server-poland" />;
}
