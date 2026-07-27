import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-ot-server');
}

export default function OldSchoolRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-ot-server" />;
}
