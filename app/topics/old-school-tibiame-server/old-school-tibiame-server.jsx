import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-server');
}

export default function OldSchoolTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-server" />;
}
