import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-ot-server');
}

export default function OldSchoolTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-ot-server" />;
}
