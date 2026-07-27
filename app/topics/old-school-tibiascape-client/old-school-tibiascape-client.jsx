import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-client');
}

export default function OldSchoolTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-client" />;
}
