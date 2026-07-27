import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-europe');
}

export default function OtclientEuropeKeywordPage() {
  return <StaticKeywordPage slug="otclient-europe" />;
}
