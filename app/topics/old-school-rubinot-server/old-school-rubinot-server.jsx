import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-server');
}

export default function OldSchoolRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-server" />;
}
