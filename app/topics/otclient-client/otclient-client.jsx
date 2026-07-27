import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-client');
}

export default function OtclientClientKeywordPage() {
  return <StaticKeywordPage slug="otclient-client" />;
}
