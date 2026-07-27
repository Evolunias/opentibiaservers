import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-private-server');
}

export default function OldSchoolDuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-private-server" />;
}
