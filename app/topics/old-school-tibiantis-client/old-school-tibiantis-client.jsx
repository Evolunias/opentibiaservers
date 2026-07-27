import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-client');
}

export default function OldSchoolTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-client" />;
}
