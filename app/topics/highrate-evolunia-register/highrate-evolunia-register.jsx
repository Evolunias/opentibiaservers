import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-register');
}

export default function HighrateEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-register" />;
}
