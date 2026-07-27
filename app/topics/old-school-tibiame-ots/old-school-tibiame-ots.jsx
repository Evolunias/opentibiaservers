import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-ots');
}

export default function OldSchoolTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-ots" />;
}
