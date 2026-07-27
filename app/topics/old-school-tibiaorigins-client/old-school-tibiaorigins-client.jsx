import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-client');
}

export default function OldSchoolTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-client" />;
}
