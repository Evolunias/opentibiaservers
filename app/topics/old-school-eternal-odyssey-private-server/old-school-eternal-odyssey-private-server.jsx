import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-private-server');
}

export default function OldSchoolEternalOdysseyPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-private-server" />;
}
