import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-server');
}

export default function OfficialEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-server" />;
}
