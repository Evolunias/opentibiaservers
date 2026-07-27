import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-private-server');
}

export default function OldSchoolMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-private-server" />;
}
