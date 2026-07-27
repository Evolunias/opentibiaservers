import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-login');
}

export default function OldSchoolTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-login" />;
}
