import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-season');
}

export default function OtclientSeasonKeywordPage() {
  return <StaticKeywordPage slug="otclient-season" />;
}
