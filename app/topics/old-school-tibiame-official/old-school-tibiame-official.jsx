import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-official');
}

export default function OldSchoolTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-official" />;
}
