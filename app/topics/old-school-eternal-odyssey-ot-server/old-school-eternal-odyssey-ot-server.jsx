import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-ot-server');
}

export default function OldSchoolEternalOdysseyOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-ot-server" />;
}
