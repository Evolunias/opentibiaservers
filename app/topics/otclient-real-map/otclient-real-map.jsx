import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-real-map');
}

export default function OtclientRealMapKeywordPage() {
  return <StaticKeywordPage slug="otclient-real-map" />;
}
