import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-rankings');
}

export default function OtclientRankingsKeywordPage() {
  return <StaticKeywordPage slug="otclient-rankings" />;
}
