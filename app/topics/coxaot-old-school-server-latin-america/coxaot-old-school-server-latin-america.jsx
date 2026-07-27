import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-old-school-server-latin-america');
}

export default function CoxaotOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-old-school-server-latin-america" />;
}
