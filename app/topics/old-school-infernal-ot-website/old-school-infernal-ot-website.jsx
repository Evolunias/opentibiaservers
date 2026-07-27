import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-website');
}

export default function OldSchoolInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-website" />;
}
