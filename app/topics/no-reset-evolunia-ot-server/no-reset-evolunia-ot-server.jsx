import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-ot-server');
}

export default function NoResetEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-ot-server" />;
}
