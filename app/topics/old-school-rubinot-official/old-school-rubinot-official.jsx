import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-official');
}

export default function OldSchoolRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-official" />;
}
