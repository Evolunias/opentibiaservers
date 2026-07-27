import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-login');
}

export default function OldSchoolEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-login" />;
}
