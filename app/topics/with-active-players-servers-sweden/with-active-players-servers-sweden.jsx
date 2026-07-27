import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-servers-sweden');
}

export default function WithActivePlayersServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-servers-sweden" />;
}
