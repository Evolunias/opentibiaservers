import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-ot-server');
}

export default function OldSchoolEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-ot-server" />;
}
