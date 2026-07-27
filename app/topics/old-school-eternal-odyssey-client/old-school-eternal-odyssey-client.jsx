import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-client');
}

export default function OldSchoolEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-client" />;
}
