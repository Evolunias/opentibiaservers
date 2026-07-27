import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-ots');
}

export default function OldSchoolEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-ots" />;
}
