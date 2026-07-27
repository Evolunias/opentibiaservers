import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-register');
}

export default function TopEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-register" />;
}
