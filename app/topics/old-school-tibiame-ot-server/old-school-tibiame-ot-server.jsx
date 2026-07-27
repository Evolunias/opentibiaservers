import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-ot-server');
}

export default function OldSchoolTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-ot-server" />;
}
