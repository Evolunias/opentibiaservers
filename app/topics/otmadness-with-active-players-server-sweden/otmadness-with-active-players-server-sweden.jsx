import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-active-players-server-sweden');
}

export default function OtmadnessWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-active-players-server-sweden" />;
}
