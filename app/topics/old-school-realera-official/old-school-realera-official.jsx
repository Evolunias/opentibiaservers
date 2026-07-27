import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-official');
}

export default function OldSchoolRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-official" />;
}
