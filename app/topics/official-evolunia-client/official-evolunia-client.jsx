import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-client');
}

export default function OfficialEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-client" />;
}
