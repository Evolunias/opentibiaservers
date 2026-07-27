import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-ots');
}

export default function LowrateEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-ots" />;
}
