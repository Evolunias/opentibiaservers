import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-ots');
}

export default function OldSchoolOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-ots" />;
}
