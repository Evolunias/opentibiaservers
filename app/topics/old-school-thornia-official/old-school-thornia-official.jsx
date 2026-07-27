import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-official');
}

export default function OldSchoolThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-official" />;
}
