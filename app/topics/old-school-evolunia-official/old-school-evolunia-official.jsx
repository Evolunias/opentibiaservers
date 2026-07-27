import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-official');
}

export default function OldSchoolEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-official" />;
}
