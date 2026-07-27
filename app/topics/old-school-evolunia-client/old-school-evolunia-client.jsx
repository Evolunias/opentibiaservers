import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-client');
}

export default function OldSchoolEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-client" />;
}
