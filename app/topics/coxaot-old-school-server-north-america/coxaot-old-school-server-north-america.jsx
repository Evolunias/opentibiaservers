import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-old-school-server-north-america');
}

export default function CoxaotOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-old-school-server-north-america" />;
}
