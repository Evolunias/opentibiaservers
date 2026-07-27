import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-client');
}

export default function OldSchoolTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-client" />;
}
