import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-official');
}

export default function OldSchoolEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-official" />;
}
