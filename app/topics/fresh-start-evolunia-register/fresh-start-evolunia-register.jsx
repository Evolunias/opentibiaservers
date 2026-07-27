import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-register');
}

export default function FreshStartEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-register" />;
}
