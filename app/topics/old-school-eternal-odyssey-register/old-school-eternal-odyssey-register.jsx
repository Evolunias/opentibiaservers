import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-register');
}

export default function OldSchoolEternalOdysseyRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-register" />;
}
