import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-ot');
}

export default function OldSchoolMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-ot" />;
}
