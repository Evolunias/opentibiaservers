import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-private-server');
}

export default function OldSchoolTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-private-server" />;
}
