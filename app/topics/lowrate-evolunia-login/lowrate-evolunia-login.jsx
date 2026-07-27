import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-login');
}

export default function LowrateEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-login" />;
}
