import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-poland');
}

export default function OtclientPolandKeywordPage() {
  return <StaticKeywordPage slug="otclient-poland" />;
}
