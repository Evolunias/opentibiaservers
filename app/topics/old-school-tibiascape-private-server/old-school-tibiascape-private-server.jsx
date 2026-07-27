import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-private-server');
}

export default function OldSchoolTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-private-server" />;
}
