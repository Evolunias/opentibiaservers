import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-server');
}

export default function OldSchoolEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-server" />;
}
