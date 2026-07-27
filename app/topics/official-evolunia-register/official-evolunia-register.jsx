import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-register');
}

export default function OfficialEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-register" />;
}
