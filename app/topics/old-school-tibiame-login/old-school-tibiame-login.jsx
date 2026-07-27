import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-login');
}

export default function OldSchoolTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-login" />;
}
