import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-register');
}

export default function PopularEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-register" />;
}
