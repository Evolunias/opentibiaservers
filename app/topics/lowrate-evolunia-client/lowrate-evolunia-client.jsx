import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-client');
}

export default function LowrateEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-client" />;
}
