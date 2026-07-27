import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-high-exp');
}

export default function OtclientHighExpKeywordPage() {
  return <StaticKeywordPage slug="otclient-high-exp" />;
}
