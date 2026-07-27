import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-brazil');
}

export default function OldSchoolTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-brazil" />;
}
