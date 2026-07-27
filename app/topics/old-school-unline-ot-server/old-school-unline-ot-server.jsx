import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-ot-server');
}

export default function OldSchoolUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-ot-server" />;
}
