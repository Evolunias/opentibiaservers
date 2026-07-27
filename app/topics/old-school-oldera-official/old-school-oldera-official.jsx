import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-official');
}

export default function OldSchoolOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-official" />;
}
