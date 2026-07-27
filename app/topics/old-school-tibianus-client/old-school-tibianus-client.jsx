import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-client');
}

export default function OldSchoolTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-client" />;
}
