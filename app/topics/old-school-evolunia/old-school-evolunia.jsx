import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia');
}

export default function OldSchoolEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia" />;
}
