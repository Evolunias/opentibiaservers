import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-register');
}

export default function CurrentEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-register" />;
}
