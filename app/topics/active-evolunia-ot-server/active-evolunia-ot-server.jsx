import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-ot-server');
}

export default function ActiveEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-ot-server" />;
}
