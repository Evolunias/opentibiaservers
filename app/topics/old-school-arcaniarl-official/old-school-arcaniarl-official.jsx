import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-official');
}

export default function OldSchoolArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-official" />;
}
