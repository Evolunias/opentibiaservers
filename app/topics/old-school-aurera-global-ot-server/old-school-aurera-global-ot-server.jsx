import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-ot-server');
}

export default function OldSchoolAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-ot-server" />;
}
