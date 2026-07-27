import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-ot');
}

export default function OldSchoolInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-ot" />;
}
