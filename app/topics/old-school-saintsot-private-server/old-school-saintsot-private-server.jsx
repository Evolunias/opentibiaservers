import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-private-server');
}

export default function OldSchoolSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-private-server" />;
}
