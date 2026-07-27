import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-register');
}

export default function NewEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-register" />;
}
