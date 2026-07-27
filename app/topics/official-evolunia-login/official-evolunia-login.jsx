import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-login');
}

export default function OfficialEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-login" />;
}
