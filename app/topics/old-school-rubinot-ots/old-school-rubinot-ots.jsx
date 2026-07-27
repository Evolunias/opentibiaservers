import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-ots');
}

export default function OldSchoolRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-ots" />;
}
