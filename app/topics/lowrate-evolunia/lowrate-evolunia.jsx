import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia');
}

export default function LowrateEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia" />;
}
