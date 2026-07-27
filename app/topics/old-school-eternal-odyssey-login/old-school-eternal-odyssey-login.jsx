import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-login');
}

export default function OldSchoolEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-login" />;
}
