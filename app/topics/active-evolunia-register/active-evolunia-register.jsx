import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-register');
}

export default function ActiveEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-register" />;
}
