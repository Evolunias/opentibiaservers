import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame');
}

export default function OldSchoolTibiameKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame" />;
}
