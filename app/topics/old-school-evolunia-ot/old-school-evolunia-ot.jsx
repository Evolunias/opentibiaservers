import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-ot');
}

export default function OldSchoolEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-ot" />;
}
