import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot');
}

export default function OldSchoolInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot" />;
}
