import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-ot');
}

export default function OldSchoolOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-ot" />;
}
