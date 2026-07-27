import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-private-server');
}

export default function OldSchoolThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-private-server" />;
}
