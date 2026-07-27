import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-ot');
}

export default function OldSchoolEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-ot" />;
}
