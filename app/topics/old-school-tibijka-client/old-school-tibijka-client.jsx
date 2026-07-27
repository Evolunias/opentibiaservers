import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-client');
}

export default function OldSchoolTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-client" />;
}
