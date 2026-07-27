import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-client');
}

export default function OldSchoolTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-client" />;
}
