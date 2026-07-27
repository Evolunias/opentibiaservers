import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey');
}

export default function OldSchoolEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey" />;
}
