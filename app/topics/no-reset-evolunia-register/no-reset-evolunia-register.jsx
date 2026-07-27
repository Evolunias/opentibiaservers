import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-register');
}

export default function NoResetEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-register" />;
}
