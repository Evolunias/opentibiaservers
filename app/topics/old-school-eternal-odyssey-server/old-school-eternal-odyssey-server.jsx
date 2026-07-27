import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-server');
}

export default function OldSchoolEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-server" />;
}
