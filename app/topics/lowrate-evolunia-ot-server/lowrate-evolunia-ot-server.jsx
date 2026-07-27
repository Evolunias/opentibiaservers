import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-ot-server');
}

export default function LowrateEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-ot-server" />;
}
