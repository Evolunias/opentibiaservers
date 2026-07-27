import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-server');
}

export default function LowrateEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-server" />;
}
