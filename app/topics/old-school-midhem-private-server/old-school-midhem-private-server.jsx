import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-private-server');
}

export default function OldSchoolMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-private-server" />;
}
