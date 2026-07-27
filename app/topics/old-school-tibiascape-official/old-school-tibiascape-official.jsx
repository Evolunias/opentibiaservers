import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-official');
}

export default function OldSchoolTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-official" />;
}
