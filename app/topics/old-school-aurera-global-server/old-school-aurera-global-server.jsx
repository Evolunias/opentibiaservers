import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-server');
}

export default function OldSchoolAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-server" />;
}
