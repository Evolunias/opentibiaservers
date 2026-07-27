import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-private-server');
}

export default function OldSchoolUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-private-server" />;
}
