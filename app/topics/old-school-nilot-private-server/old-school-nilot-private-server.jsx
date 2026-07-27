import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-private-server');
}

export default function OldSchoolNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-private-server" />;
}
