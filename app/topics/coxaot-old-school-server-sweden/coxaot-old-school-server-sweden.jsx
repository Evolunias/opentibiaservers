import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-old-school-server-sweden');
}

export default function CoxaotOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-old-school-server-sweden" />;
}
