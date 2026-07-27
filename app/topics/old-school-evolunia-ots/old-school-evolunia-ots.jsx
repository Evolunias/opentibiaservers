import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-ots');
}

export default function OldSchoolEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-ots" />;
}
