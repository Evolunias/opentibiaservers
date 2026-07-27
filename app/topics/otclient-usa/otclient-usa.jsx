import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-usa');
}

export default function OtclientUsaKeywordPage() {
  return <StaticKeywordPage slug="otclient-usa" />;
}
