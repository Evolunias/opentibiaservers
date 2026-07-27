import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death');
}

export default function OldSchoolMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death" />;
}
