import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-private-server');
}

export default function OldSchoolArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-private-server" />;
}
