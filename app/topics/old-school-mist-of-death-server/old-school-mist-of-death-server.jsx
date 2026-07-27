import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-server');
}

export default function OldSchoolMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-server" />;
}
