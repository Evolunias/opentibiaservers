import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-server');
}

export default function OldSchoolTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-server" />;
}
