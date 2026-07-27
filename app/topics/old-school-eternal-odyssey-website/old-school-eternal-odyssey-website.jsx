import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-website');
}

export default function OldSchoolEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-website" />;
}
