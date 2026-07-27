import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-ot');
}

export default function OldSchoolRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-ot" />;
}
