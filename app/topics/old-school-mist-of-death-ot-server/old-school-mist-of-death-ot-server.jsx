import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-ot-server');
}

export default function OldSchoolMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-ot-server" />;
}
