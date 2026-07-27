import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-with-players');
}

export default function OtclientWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="otclient-with-players" />;
}
