import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-ot-server');
}

export default function OldSchoolEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-ot-server" />;
}
