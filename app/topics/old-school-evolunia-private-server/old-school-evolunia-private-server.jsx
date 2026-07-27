import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-private-server');
}

export default function OldSchoolEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-private-server" />;
}
