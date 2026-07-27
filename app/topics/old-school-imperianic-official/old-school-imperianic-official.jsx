import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-official');
}

export default function OldSchoolImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-official" />;
}
