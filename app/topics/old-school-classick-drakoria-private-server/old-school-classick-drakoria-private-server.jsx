import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-private-server');
}

export default function OldSchoolClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-private-server" />;
}
