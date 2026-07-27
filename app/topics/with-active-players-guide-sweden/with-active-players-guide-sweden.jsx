import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-sweden');
}

export default function WithActivePlayersGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-sweden" />;
}
