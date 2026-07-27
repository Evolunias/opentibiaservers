import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-register');
}

export default function LowrateEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-register" />;
}
