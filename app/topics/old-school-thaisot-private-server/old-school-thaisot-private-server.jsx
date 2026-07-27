import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-private-server');
}

export default function OldSchoolThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-private-server" />;
}
